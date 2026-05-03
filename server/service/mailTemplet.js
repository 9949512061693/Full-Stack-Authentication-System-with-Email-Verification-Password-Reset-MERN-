const welcomeEmailTemplete = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f4f6fb; font-family: Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb; padding:20px 0;">
      <tr>
        <td align="center">
          
          <!-- Main Container -->
          <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #4CAF50, #2E7D32); padding:20px; text-align:center;">
                <h1 style="color:white; margin:0; font-size:22px;">
                  🚀 Welcome to Our Eshop
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                
                <h2 style="margin-top:0;">Hi {{NAME}} 👋</h2>

                <p style="font-size:15px; line-height:1.6;">
                  We're excited to have you on board! Your journey starts here.
                </p>

                <p style="font-size:15px; line-height:1.6;">
                  Explore features, manage your account, and get the most out of our platform.
                </p>

                <!-- Button -->
                <div style="text-align:center; margin:30px 0;">
                  <a href="{{APP_LINK}}" 
                     style="background:#4CAF50; color:#ffffff; padding:12px 25px; text-decoration:none; border-radius:6px; font-size:14px; display:inline-block;">
                    Get Started
                  </a>
                </div>

                <p style="font-size:13px; color:#777;">
                  If you have any questions, feel free to reach out to our support team anytime.
                </p>

              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-top:1px solid #eee;"></td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px; text-align:center; font-size:12px; color:#999;">
                <p style="margin:5px 0;">© 2026 Eshop</p>
                <p style="margin:5px 0;">
                  Made with ❤️ for amazing users
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;

const passwordResetTemplete = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px 0;">
      <tr>
        <td align="center">
          
          <!-- Container -->
          <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(90deg,#4CAF50,#2E7D32); padding:20px; text-align:center; color:white;">
                <h2 style="margin:0;">🔐 Password Reset</h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                
                <p style="margin:0 0 15px;">Hi {{Name}},</p>

                <p style="margin:0 0 20px; line-height:1.6;">
                  We received a request to reset your password. Click the button below to set a new one.
                </p>

                <!-- Button -->
                <div style="text-align:center; margin:30px 0;">
                  <a href="{{RESET_LINK}}" 
                     style="background:#4CAF50; color:#ffffff; padding:14px 28px; text-decoration:none; border-radius:8px; font-weight:bold; display:inline-block; font-size:16px;">
                     Reset Password
                  </a>
                </div>

                <p style="margin:0 0 10px; font-size:14px; color:#555;">
                  This link will expire in <strong>15 minutes</strong>.
                </p>

                <p style="margin:0 0 10px; font-size:14px; color:#555;">
                  If you didn’t request this, you can safely ignore this email.
                </p>

                <!-- Fallback link -->
                <p style="margin-top:20px; font-size:12px; color:#888;">
                  If the button doesn’t work, copy and paste this link into your browser:
                </p>

                <p style="word-break:break-all; font-size:12px; color:#4CAF50;">
                  {{RESET_LINK}}
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f1f1; text-align:center; padding:15px; font-size:12px; color:#777;">
                © 2026 Your App. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;

const PasswordResetSuccesTemplete = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Eshop App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

const verificationOTPTemplete = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #4CAF50, #2E7D32); padding:20px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:24px;">Verify Your Account</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333;">
              
              <p style="margin:0 0 10px;">Hi there 👋,</p>
              
              <p style="margin:0 0 20px; line-height:1.6;">
                Thanks for signing up! Please use the verification code below to complete your registration.
              </p>

              <!-- OTP Box -->
              <div style="text-align:center; margin:30px 0;">
                <span style="display:inline-block; background:#f1f8f4; color:#2E7D32; padding:15px 30px; font-size:28px; letter-spacing:5px; border-radius:8px; font-weight:bold;">
                  {{OTP}}
                </span>
              </div>

              <p style="margin:0 0 20px; line-height:1.6;">
                This code is valid for <strong>24 hours</strong>.
              </p>

              <p style="margin:0; line-height:1.6;">
                If you didn’t request this, you can safely ignore this email.
              </p>

            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="border-top:1px solid #eee;"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px; text-align:center; font-size:12px; color:#888;">
              <p style="margin:0;">© 2026 Your App. All rights reserved.</p>
              <p style="margin:5px 0 0;">Need help? Contact support.</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

module.exports = {
  welcomeEmailTemplete,
  passwordResetTemplete,
  verificationOTPTemplete,
  PasswordResetSuccesTemplete
};
