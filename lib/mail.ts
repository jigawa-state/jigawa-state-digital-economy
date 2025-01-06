import { Resend } from 'resend'
// import { FC } from 'react'; // Remove this line if not used elsewhere



const env = process.env.NODE_ENV
const resend = new Resend(process.env.RESEND_API_KEY)
let baseUrl;
let redirrectUrl;


if (env === 'production') {
    redirrectUrl = 'https://ict.jg.gov.ng'

} else {
    redirrectUrl = 'http://localhost:3000'
}



if (env === 'production') {
    baseUrl = 'https://stablebricks.com'
} else {
    baseUrl = 'http://localhost:3000'
}


interface EmailTemplateProps {
    token: string;
  }
  
  export const EmailTemplate = ({ token }: EmailTemplateProps): string => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your 2FA Code</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <tr>
            <td style="background-color: #10B981; padding: 20px; text-align: center;">
              <img src=".${baseUrl}/jictde.png" alt="JICTDE Logo" style="max-width: 150px;">
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 20px;">
              <h1 style="color: #333333; margin-bottom: 20px;">Confirm Your Email</h1>
              <p style="color: #666666; margin-bottom: 30px;">Thank you for using Jigawa ICT and Digital Economy (JICTDE) services. To ensure the security of your account, please use the following 2FA code to complete your authentication:</p>
              <div style="background-color: #f0f0f0; border-radius: 4px; padding: 15px; text-align: center; margin-bottom: 30px;">
                <span style="font-size: 24px; font-weight: bold; color: #10B981;">${token}</span>
              </div>
              <p style="color: #666666; margin-bottom: 20px;">This code will expire in 10 minutes. If you didn't request this code, please ignore this email or contact our support team if you have any concerns.</p>
              <p style="color: #666666;">Best regards,<br>The JICTDE Team</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; color: #ffffff; padding: 20px; text-align: center;">
              <p style="margin-bottom: 10px;">Follow us on social media:</p>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Facebook</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Twitter</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              <p style="margin-top: 20px; font-size: 12px;">© 2025 Jigawa ICT and Digital Economy. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
  };
  
  export const sendTwoFactorEmail = async (email: string, token: string) => {
    await resend.emails.send({
      from: "Jigawa ICT and Digital Economy (JICTDE) <noreply@ict.jg.gov.ng>",
      to: email,
      subject: "Confirm Your Email",
      html: EmailTemplate({ token })
    });
  };



  interface PasswordResetEmailTemplateProps {
    resetLink: string;
  }
  
  export const PasswordResetEmailTemplate = ({ resetLink }: PasswordResetEmailTemplateProps): string => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <tr>
            <td style="background-color: #10B981; padding: 20px; text-align: center;">
              <img src=".${baseUrl}/jictde.png" alt="JICTDE Logo" style="max-width: 150px;">
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 20px;">
              <h1 style="color: #333333; margin-bottom: 20px;">Reset Your Password</h1>
              <p style="color: #666666; margin-bottom: 30px;">You've requested to reset your password for your Jigawa ICT and Digital Economy (JICTDE) account. Click the button below to set a new password:</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${resetLink}" style="display: inline-block; background-color: #10B981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold;">Reset Password</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; margin-top: 30px;">If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.</p>
              <p style="color: #666666; margin-top: 20px;">For security reasons, this link will expire in 1 hour. If you need to reset your password after that, please request a new reset link.</p>
              <p style="color: #666666; margin-top: 30px;">Best regards,<br>The JICTDE Team</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; color: #ffffff; padding: 20px; text-align: center;">
              <p style="margin-bottom: 10px;">Follow us on social media:</p>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Facebook</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Twitter</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              <p style="margin-top: 20px; font-size: 12px;">© 2025 Jigawa ICT and Digital Economy. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
  };
  
  export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${redirrectUrl}/new-password?token=${token}`;
  
    await resend.emails.send({
      from: 'Jigawa ICT and Digital Economy (JICTDE) <noreply@ict.jg.gov.ng>',
      to: email,
      subject: "Reset Your Password",
      html: PasswordResetEmailTemplate({ resetLink })
    });
  };
  

  



// export const sendPasswordResetEmail = async ( email: string, token: string) => {
//     const resetLink =  `${baseUrl}/new-password?token=${token}`

//     await resend.emails.send({
//         from: 'Jigawa ICT and Digital Economy (JICTDE) <noreply@ict.jg.gov.ng>',
//         to: email,
//         subject: "Forgot Password Request",
//         html: `<p>Click the link to <a href="${resetLink}">Reset your password</a></p>`
//     })
// }

// export const sendVrificationEmail = async ( 
//     email: string, 
//     token: string
// ) => {

//     const confirmationLink = `${baseUrl}/email-verification?token=${token}`
//     await resend.emails.send({
//         from: 'Jigawa ICT and Digital Economy (JICTDE) <noreply@ict.jg.gov.ng>',
//         to: email,
//         subject: "Verify your Jigawa ICT and Digital Economy (JICTDE) Account",
//         html: `<p>Click the link to <a href="${confirmationLink}">Confirm your Email </a></p>`
//     })
// }

interface WelcomeEmailTemplateProps {
    confirmationLink: string;
  }
  
  export const WelcomeEmailTemplate = ({ confirmationLink }: WelcomeEmailTemplateProps): string => {

    const logoUrl = `${baseUrl}/jictde.png`;
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Jigawa ICT and Digital Economy (JICTDE)</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <tr>
            <td style="background-color: #10B981; padding: 20px; text-align: center;">
              <img src="${logoUrl}" alt="JICTDE Logo" style="max-width: 150px;">
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 20px;">
              <h1 style="color: #333333; margin-bottom: 20px;">Welcome to the JICTDE Admin Team!</h1>
              <p style="color: #666666; margin-bottom: 20px;">Congratulations on joining the Jigawa ICT and Digital Economy (JICTDE) administrative team. We're excited to have you on board!</p>
              <p style="color: #666666; margin-bottom: 20px;">You have been assigned administrative privileges, which will allow you to manage and oversee various aspects of our digital infrastructure and projects.</p>
              <p style="color: #666666; margin-bottom: 30px;">To get started, please verify your account by clicking the button below:</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${confirmationLink}" style="display: inline-block; background-color: #10B981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold;">Verify Your Account</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; margin-top: 30px;">Once verified, you'll have full access to the admin dashboard and tools. If you have any questions about your role or responsibilities, please don't hesitate to reach out to the IT support team.</p>
              <p style="color: #666666; margin-top: 20px;">We look forward to your contributions in advancing Jigawa's digital landscape!</p>
              <p style="color: #666666; margin-top: 30px;">Best regards,<br>The JICTDE CTO</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #333333; color: #ffffff; padding: 20px; text-align: center;">
              <p style="margin-bottom: 10px;">Connect with us:</p>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Facebook</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Twitter</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              <p style="margin-top: 20px; font-size: 12px;">© 2025 Jigawa ICT and Digital Economy. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
  };
  
  export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmationLink = `${redirrectUrl}/email-verification?token=${token}`;
    await resend.emails.send({
      from: 'Jigawa ICT and Digital Economy (JICTDE) <noreply@ict.jg.gov.ng>',
      to: email,
      subject: "Welcome to JICTDE - Verify Your Admin Account",
      html: WelcomeEmailTemplate({ confirmationLink })
    });
  };
  