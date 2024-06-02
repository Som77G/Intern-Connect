const {query}= require("../dbconfig/dbconfig");
const cloudinary= require('cloudinary');

const getAllApplications= async(req, res)=>{
    try {
       const {userType}= req.user;
       if(userType==="student"){
          throw new Error("All Applications are not accessible by the student");
       }

       const applicationsGetQuery= `
       SELECT * FROM applications
       `;
       console.log("getting applications from the database");

       const applicationsResponse= await query({
        query: applicationsGetQuery,
        values: []
       });

       console.log("Received applications");
       return res.status(200).json({
        success: true,
        applications: applicationsResponse
       })

    } catch (error) {
        console.log("Error at fetching applications from the database");
        res.status(401).json({
            status: 401,
            error: error.message
        })
    }
};

const jobseekerGetAllApplications= async(req, res)=>{
    try {
        const {userType, userid}= req.user;
        if(userType=== "admin"){
            throw new Error("Admin is not allowed to access applications of student");
        }
       
        const applicationsGetQuery= `
         SELECT * FROM applications
         WHERE applicantID= ?
        `;
         
        const applications= await query({
            query: applicationsGetQuery,
            values: [userid]
        })
        console.log("Received applications of the student");
        res.status(200).json({
            success: true,
            applications
        })

    } catch (error) {
        console.log("Error at fetching student applications");
        res.status(401).json({
            success: false,
            messages: error.message
        })
    }
};

//post an application
// const postApplication= async(req, res)=>{
//     try {
//         const {userType, userid}= req.user;
//         if(userType=== "admin"){
//             throw new Error("Admin is not allowed to post an application");
//         }
        
//         if(!req.files || Object.keys(req.files).length ===0){
//             throw new Error("Resume File is Required");
//         }

//         const { resume } = req.files;
//         const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
//         if (!allowedFormats.includes(resume.mimetype)) {
//           throw new Error("Invalid file type. Please upload a PNG file.");
//         }
//         const cloudinaryResponse = await cloudinary.uploader.upload(
//           resume.tempFilePath
//         );
      
//         if (!cloudinaryResponse || cloudinaryResponse.error) {
//           console.error(
//             "Cloudinary Error:",
//             cloudinaryResponse.error || "Unknown Cloudinary error"
//           );
//           throw new Error("Failed to upload Resume to Cloudinary")
//         }
//         const {name, email, coverLetter, phone, address, jobId}= await req.body;
//         const applicantID= userid;
//         if(!jobId){
//             throw new Error("Job not found");
//         }

//         //search the job 
//         console.log("Searching for the job student wishes to apply");
//         const searchJobQuery= `
//           SELECT * FROM jobs
//           WHERE id= ?
//         `;

//         const jobDetails= await query({
//             query: searchJobQuery,
//             values: [jobId]
//         })
//         console.log("Job found in the database");
//         if(jobDetails.length===0){
//             throw new Error("Job not found");
//         }
//         console.log("job details", jobDetails);
//         const postedBy=await jobDetails[0].postedBy;
//         //fetch company id 
//         const companyName= await jobDetails[0].companyName;
//         console.log("Searching for the company", companyName);
//         const searchCompanyQuery= `
//         SELECT * FROM company_list
//         WHERE name= ?
//         `;
//         const companyDetails= await query({
//             query: searchCompanyQuery,
//             values: [companyName]
//         })
//         if(companyDetails.length===0){
//             throw new Error("company not found");
//         }
//         console.log("Company found");

//         const employerID= await companyDetails[0].cid;
//         console.log("name: ", name);
//         console.log("email: ", email);
//         console.log("coverLetter: ", coverLetter);
//         console.log("phone: ", phone);
//         console.log("address: ", address);
//         console.log("applicantID: ", applicantID);
//         console.log("employerID: ", employerID);
//         console.log("resume: ", resume);
        
        
//         if (
//             !name ||
//             !email ||
//             !coverLetter ||
//             !phone ||
//             !address ||
//             !applicantID ||
//             !employerID ||
//             !resume
//           ) {
//             throw new Error("Please fill all the fields");
//           }
          
//           //insert application
//           console.log('saving application to database');
//           const insertApplicationQuery= `
//           INSERT INTO applications
//           (
//             name,
//             email,
//             coverLetter,
//             phone,
//             address,
//             applicantID,
//             employerID,
//             resume_public_id,
//             resume_url, 
//             postedBy
//           )VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//           `;

//         //   const application= await query({
//         //     query: insertApplicationQuery,
//         //     values: [name, email, coverLetter, phone, address, applicantID, employerID, cloudinaryResponse.public_id, cloudinaryResponse.secure_url, postedBy]
//         //   });
//         //   console.log("Application Submitted Successfully");
//         //   res.status(200).json({
//         //     success: true,
//         //     message: "Application Submitted Successfully!",
//         //     application
//         //   });

//         const result = await query({
//             query: insertApplicationQuery,
//             values: [name, email, coverLetter, phone, address, applicantID, employerID, cloudinaryResponse.public_id, cloudinaryResponse.secure_url, postedBy]
//           });
      
//           // Fetch the newly inserted application
//           const getApplicationQuery = `
//             SELECT * FROM applications WHERE id = ?
//           `;
//           const [application] = await query({
//             query: getApplicationQuery,
//             values: [result.insertId]
//           });
      
//           res.status(200).json({
//             success: true,
//             message: "Application Submitted Successfully!",
//             application,
//           });
//     } catch (error) {
//         console.log("Error at posting application: ", error);
//         res.status(401).json({
//             success: false,
//             message: error.message
//         })
//     }
// };



const postApplication = async (req, res) => {
    try {
      // console.log("request", req);
      const { userType, userid } = req.user;
      if (userType === "admin") {
        throw new Error("Admin is not allowed to post an application");
      }
  
      const { name, email, coverLetter, phone, address, resume_public_id, resume_url, jobId} = req.body;
      console.log("inside post application", resume_public_id);
      console.log("inside post application", resume_url);
      console.log("name",name);
      if (!resume_url) {
        throw new Error("Resume URL is required");
      }
  
      if (!name || !email || !coverLetter || !phone || !address || !jobId) {
        throw new Error("Please fill all the fields");
      }
  
      const applicantID = userid;
  
      // Search for the job
      console.log("Searching for the job student wishes to apply");
      const searchJobQuery = `SELECT * FROM jobs WHERE id = ?`;
      const jobDetails = await query({
        query: searchJobQuery,
        values: [jobId]
      });
  
      if (jobDetails.length === 0) {
        throw new Error("Job not found");
      }
  
      const postedBy = jobDetails[0].postedBy;
      const companyName = jobDetails[0].companyName;
  
      // Fetch company ID
      console.log("Searching for the company", companyName);
      const searchCompanyQuery = `SELECT * FROM company_list WHERE name = ?`;
      const companyDetails = await query({
        query: searchCompanyQuery,
        values: [companyName]
      });
  
      if (companyDetails.length === 0) {
        throw new Error("Company not found");
      }
  
      const employerID = companyDetails[0].cid;
  
      // Insert application
      console.log('Saving application to database');
      const insertApplicationQuery = `
        INSERT INTO applications (
          name,
          email,
          coverLetter,
          phone,
          address,
          applicantID,
          employerID,
          resume_public_id,
          resume_url,
          postedBy
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const result = await query({
        query: insertApplicationQuery,
        values: [
          name,
          email,
          coverLetter,
          phone,
          address,
          applicantID,
          employerID,
          resume_public_id,
          resume_url,
          postedBy
        ]
      });
  
      // Fetch the newly inserted application
      const getApplicationQuery = `SELECT * FROM applications WHERE id = ?`;
      const [application] = await query({
        query: getApplicationQuery,
        values: [result.insertId]
      });
  
      res.status(200).json({
        success: true,
        message: "Application Submitted Successfully!",
        application,
      });
    } catch (error) {
      console.log("Error at posting application: ", error);
      res.status(401).json({
        success: false,
        message: error.message
      });
    }
  };
  

  
const  jobseekerDeleteApplication= async(req, res)=>{
    try {
        const {userType}= req.user;
        if (userType === "admin"){
            throw new Error("Admin is not allowed to delete an application");
        }

        const{id}= req.params;

        //find the application
        const findApplicationQuery= `
        SELECT * FROM applications
        WHERE id= ?
        `;

        const [applicationObj]= await query({
            query: findApplicationQuery,
            values: [id]
        })

        if(!applicationObj){
            throw new Error("Application not found");
        }

        console.log("Application found in the database")

        //Delete application
        const deleteApplicationQuery= `
        DELETE FROM applications
        WHERE id = ?
        `;
        await query({
            query: deleteApplicationQuery,
            values: [id]
        });

        res.status(200).json({
            success: true,
            message: 'Application Deleted Successfully',
          });
    } catch (error) {
        console.error('Error deleting the application', error);
        res.status(400).json({
          success: false,
          message: error.message,
        });
    }
}
module.exports= {getAllApplications, jobseekerGetAllApplications,jobseekerDeleteApplication, postApplication};