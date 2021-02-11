const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    debug: true,
    auth: {
        user:"" ,
        pass: ""
    }
})

const sendMail = async (email, marks, totalMarks, subjectName) => {
    try {
        await transport.sendMail({
            from:"" ,
            to: email,
            subject:"Marks Upload",
            html: `<h1> Your marks are uploaded for ${subjectName} </h1>
                    <p> You have scored ${marks} out of ${totalMarks} </p>
            `
            });
        }
     catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = sendMail  
