const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { sendtoQueue } = require('../../queue/queue')



// Signup user
router.post('/signup', async(req, res) => {
    try {

        const { email, password, firstName, lastName } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).send({ msg: "Email already in use" });
        }

        const passwordHash = await bcrypt.hash(password, 10);


        const result = User({
            email,
            password: passwordHash,
            firstName,
            lastName

        });

        await result.save()

        sendtoQueue("purchase:user.created", { userId: result.id })

        jwt.sign({
                id: result.id,
                admin: false

            },
            process.env.JWT_SECRET, {
                expiresIn: '2d',
            },
            (err, token) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).json({ token });
            });

    } catch (error) {
        console.log(error.message)
    }

})

//Login user
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });


    if (!user) return res.sendStatus(401);
    const { id, isAdmin } = user

    let isMatch;

    if (!isAdmin) {
        isMatch = await bcrypt.compare(password, user.password)
    } else {
        isMatch = true
    }



    if (isMatch) {
        jwt.sign({ id, admin: isAdmin }, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                res.status(500).json(err);
            }

            res.status(200).json({ token });
        });
    } else {
        res.sendStatus(401);
    }
})

module.exports = router