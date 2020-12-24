const { faGlassMartiniAlt } = require("@fortawesome/free-solid-svg-icons")
const nodemailer = require("nodemailer")

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body)
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com.au",
    port: 465,
    auth: {
      user: "teomunjoon@zohomail.com.au",
      pass: "U9v5eZfCfpG4",
    },
  })

  transporter.sendMail(
    {
      from: "teomunjoon@zohomail.com.au",
      to: "teomunjoon101@gmail.com",
      subject: "Website Enquiry",
      html: `
            </div>Email from ${data.name} ${data.email}</div><br>
            <div>${data.message}</div>
        `,
    },
    function (err, info) {
      if (err) {
        callback(err)
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        })
      }
    }
  )
}
