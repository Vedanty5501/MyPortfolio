import React from 'react'
import avasafe from '../../Assets/Project/avasafe-icon.jpg'
import vidyadaan from '../../Assets/Project/vidyadaan.jpeg'
import './projects.css'
import avasafeAPK from '../../Assets/Project/APKs/AvaSafe.apk'
import vidyadaanAPK from '../../Assets/Project/APKs/VidyaDaan.apk'

const Projects = () => {



  const githubvidyadaan = (address) => {
    const link = document.createElement('a');
    link.href = "https://github.com/Vedanty5501/Vidya_Daan"; 
    link.target = "_blank"
    link.click();
  };

  const githubavasafe = (address) => {
    const link = document.createElement('a');
    link.href = "https://github.com/Vedanty5501/AVASAFE"; 
    link.target = "_blank"
    link.click();
  };


  const handleDownloadAvasafe = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = avasafeAPK; 
    link.download = 'AvaSafe.apk'; 
    link.click();
  };
  const handleDownloadVidyaDaan = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = vidyadaanAPK; 
    link.download = 'AvaSafe.apk'; 
    link.click();
  };


  return (
    <>
      <div className='projects'>
        <div className='project1'>
          <h1>VidyaDaan</h1>
          <img src={vidyadaan} alt="VidyaDaan Project"/>
          <p>
            <h5>Android App for Connecting NGOs with Donors</h5>
            <h5 style={{textAlign: 'left', display: 'inline'}}>Description:</h5>
            Vidya-Daan is an Android application designed to bridge the gap between NGOs and potential donors, creating a seamless platform for social good. Built using Android Studio and Firebase, the app allows NGOs to list their causes and requirements while providing donors an easy-to-use interface to contribute resources. With features like real-time data synchronization and secure donation tracking, Vidya-Daan aims to foster transparency and encourage more people to support meaningful causes.<br/><br/>
            <h5 style={{textAlign: 'left', display: 'inline'}}>Tech Stack:</h5>
            Android Studio, Firebase, Java
          </p>
          <div className='links'>
          <div className='APK-Link' onClick={handleDownloadVidyaDaan}>Get APK</div>
          <div className='APK-Link' onClick={githubvidyadaan}>GitHub</div>
          </div>
        </div>

        <div className='project1'>
          <h1>AvaSafe</h1>
          <img src={avasafe} alt="AvaSafe Project"/>
          <p>
            <h5>AvaSafe: Avalanche Prediction and Warning System</h5>
            <h5 style={{textAlign: 'left', display: 'inline'}}>Description:</h5>
            AvaSafe is a research-driven avalanche prediction prototype designed to enhance safety in Himalayan regions prone to snow avalanches. Leveraging machine learning techniques such as Random Forest and Neural Networks, AvaSafe predicts potential avalanche occurrences by analyzing various environmental factors like temperature, snow depth, and weather conditions. The model processes real-time data to provide timely warnings, helping prevent disasters and safeguard lives. This project underscores a deep understanding of data science, artificial intelligence, and environmental risk assessment.<br/><br/>
            <h5 style={{textAlign: 'left', display: 'inline'}}>Tech Stack:</h5>
            Python, Random Forest, Neural Networks, Data Science, Machine Learning
          </p>
          <div className='links'>
          <div className='APK-Link' onClick={handleDownloadAvasafe}>Get APK</div>
          <div className='APK-Link' onClick={githubavasafe}>GitHub</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects