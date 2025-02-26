import React from 'react';
import { FaHeartbeat, FaLightbulb, FaUserFriends, FaClipboardCheck, FaChartLine, FaBrain } from 'react-icons/fa';

export const coreValues = [
  {
    id: 1,
    title: 'Compassionate Care',
    description: 'We approach each patient with empathy and understanding, recognizing that the journey to enhanced mobility is both physical and emotional.',
    icon: <FaHeartbeat />
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'We continuously explore and implement the latest advancements in prosthetic and orthotic technology to offer optimal solutions.',
    icon: <FaLightbulb />
  },
  {
    id: 3,
    title: 'Patient Partnership',
    description: 'We believe in collaborative care, working closely with patients to understand their goals and involving them in treatment decisions.',
    icon: <FaUserFriends />
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'We maintain the highest standards in clinical expertise, custom fabrication, and patient service across all aspects of care.',
    icon: <FaClipboardCheck />
  },
  {
    id: 5,
    title: 'Continuous Improvement',
    description: 'We are committed to ongoing education and refinement of our techniques to provide ever-improving care and outcomes.',
    icon: <FaChartLine />
  },
  {
    id: 6,
    title: 'Holistic Approach',
    description: 'We address not just the physical aspects of prosthetic and orthotic needs, but consider lifestyle, psychological, and social factors.',
    icon: <FaBrain />
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    position: 'Certified Prosthetist-Orthotist, Clinic Director',
    image: 'https://via.placeholder.com/300x300?text=Dr.+Wilson',
    shortBio: 'With over 15 years of experience, Dr. Wilson leads our clinical team with expertise in advanced prosthetic technologies and complex cases.',
    fullBio: 'Dr. James Wilson, CPO, has dedicated his career to advancing prosthetic care through both clinical practice and research. After completing his medical training at Northwestern University, he specialized in prosthetics and orthotics, earning board certifications in both disciplines. He has published numerous papers on microprocessor knee technology and leads our research collaboration with local universities. As Clinic Director, he oversees all clinical operations while maintaining an active patient caseload, with particular expertise in complex lower limb prosthetics and bionic technology.',
    education: [
      'Doctor of Physical Medicine and Rehabilitation, Northwestern University',
      'Prosthetics-Orthotics Certification, Northwestern University Prosthetics-Orthotics Center',
      'Board Certified in Prosthetics and Orthotics'
    ],
    specialties: ['Lower Limb Prosthetics', 'Microprocessor Knees', 'Bionic Technology', 'Complex Cases']
  },
  {
    id: 2,
    name: 'Maria Rodriguez, CPO',
    position: 'Senior Prosthetist-Orthotist',
    image: 'https://via.placeholder.com/300x300?text=Maria+Rodriguez',
    shortBio: 'Maria specializes in pediatric prosthetics and orthotics, bringing creativity and compassion to help our youngest patients thrive.',
    fullBio: 'Maria Rodriguez has been with Aero Prosthetics since its founding, specializing in pediatric care. Her approach combines technical expertise with a natural ability to connect with children, helping them adapt to and embrace their devices. Maria is bilingual in English and Spanish, allowing her to better serve our diverse patient population. She leads our pediatric program, working closely with children's hospitals and schools to ensure comprehensive care. Maria is known for her creative solutions that address not only functional needs but also the unique concerns of growing children.',
    education: [
      'Master of Science in Prosthetics and Orthotics, University of Texas Southwestern Medical Center',
      'Bachelor of Science in Kinesiology, University of California, Los Angeles',
      'Board Certified in Prosthetics and Orthotics'
    ],
    specialties: ['Pediatric Prosthetics', 'Pediatric Orthotics', 'Growth Accommodation', 'Sports Prosthetics for Children']
  },
  {
    id: 3,
    name: 'Robert Chen, CO',
    position: 'Certified Orthotist',
    image: 'https://via.placeholder.com/300x300?text=Robert+Chen',
    shortBio: 'Robert specializes in custom spinal orthotics and scoliosis management, with additional expertise in sports bracing and injury prevention.',
    fullBio: 'Robert Chen brings specialized expertise in spinal orthotics and scoliosis management to our team. Before joining Aero Prosthetics, he worked at a major orthopedic hospital, collaborating with spine surgeons on complex cases. Robert has developed innovative approaches to scoliosis bracing that have improved patient comfort and compliance. He is also passionate about sports medicine, creating custom bracing solutions for athletes from weekend warriors to professionals. Robert regularly presents at orthotic conferences on advancements in spinal bracing technology.',
    education: [
      'Master of Science in Orthotics and Prosthetics, California State University, Dominguez Hills',
      'Bachelor of Science in Exercise Science, University of Southern California',
      'Board Certified in Orthotics'
    ],
    specialties: ['Spinal Orthotics', 'Scoliosis Management', 'Sports Bracing', 'Post-Surgical Bracing']
  },
  {
    id: 4,
    name: 'Sarah Johnson, CP',
    position: 'Certified Prosthetist, Upper Limb Specialist',
    image: 'https://via.placeholder.com/300x300?text=Sarah+Johnson',
    shortBio: 'Sarah focuses on upper limb prosthetics, helping patients regain function and confidence through advanced prosthetic technology.',
    fullBio: 'Sarah Johnson joined Aero Prosthetics after specializing in upper limb prosthetics at a leading rehabilitation center. She has extensive experience with myoelectric technology, activity-specific devices, and cosmetic restoration. Sarah works closely with occupational therapists to ensure patients achieve maximum function with their prostheses. She is particularly interested in helping patients return to specific activities they enjoyed before limb loss, from playing musical instruments to rock climbing. Sarah leads our upper limb support group and regularly organizes workshops for patients to learn new skills with their devices.',
    education: [
      'Master of Science in Prosthetics, University of Pittsburgh',
      'Bachelor of Science in Biomedical Engineering, Georgia Institute of Technology',
      'Board Certified in Prosthetics'
    ],
    specialties: ['Upper Limb Prosthetics', 'Myoelectric Devices', 'Activity-Specific Prostheses', 'Cosmetic Restoration']
  },
  {
    id: 5,
    name: 'Michael Torres, BOCO',
    position: 'Board Certified Orthotist, Mastectomy Fitter',
    image: 'https://via.placeholder.com/300x300?text=Michael+Torres',
    shortBio: 'Michael specializes in compression garments and mastectomy prosthetics, providing compassionate care for post-surgical patients.',
    fullBio: 'Michael Torres brings a unique combination of technical expertise and compassionate care to our team, specializing in post-surgical support through compression therapy and mastectomy fittings. He has developed our comprehensive approach to breast cancer recovery, working closely with oncology teams at local hospitals. Michael is certified in lymphedema therapy and provides ongoing education to both patients and healthcare professionals about the importance of proper compression and fitting. His patient-centered approach has made him particularly effective in this sensitive area of care, helping patients navigate their recovery with dignity and comfort.',
    education: [
      'Bachelor of Science in Orthotics and Prosthetics, Florida International University',
      'Board Certified Orthotist',
      'Certified Mastectomy Fitter',
      'Certified Lymphedema Therapist'
    ],
    specialties: ['Compression Therapy', 'Post-Mastectomy Care', 'Lymphedema Management', 'Post-Surgical Support']
  },
  {
    id: 6,
    name: 'Patricia Lee, CPO',
    position: 'Certified Prosthetist-Orthotist',
    image: 'https://via.placeholder.com/300x300?text=Patricia+Lee',
    shortBio: 'Patricia specializes in lower extremity prosthetics with expertise in helping patients with vascular disease and diabetes.',
    fullBio: 'Patricia Lee joined Aero Prosthetics after working in a major hospital setting where she developed specialized knowledge in caring for patients with vascular conditions and diabetes. Her approach focuses on the unique challenges these health conditions present for prosthetic users, including tissue sensitivity, healing concerns, and changing limb volume. Patricia works closely with wound care specialists and vascular surgeons to ensure coordinated care. She has developed protocols for our clinic regarding proper fitting techniques for patients with compromised circulation and leads continuing education on this topic for our staff.',
    education: [
      'Master of Science in Prosthetics and Orthotics, University of Washington',
      'Bachelor of Science in Neuroscience, University of California, San Diego',
      'Board Certified in Prosthetics and Orthotics'
    ],
    specialties: ['Diabetic Foot Care', 'Vascular Disease Accommodation', 'Volume Management', 'Wound Prevention']
  },
  {
    id: 7,
    name: 'Thomas Wright, CPO',
    position: 'Certified Prosthetist-Orthotist, CAD/CAM Specialist',
    image: 'https://via.placeholder.com/300x300?text=Thomas+Wright',
    shortBio: 'Thomas leads our technical fabrication team, specializing in CAD/CAM technology and 3D printing applications for custom devices.',
    fullBio: 'Thomas Wright brings innovation to our fabrication processes through his expertise in computer-aided design and manufacturing. With a background in both prosthetics and engineering, he has helped implement advanced 3D scanning, modeling, and printing technologies at Aero Prosthetics. Thomas leads our technical team in creating precisely fitted devices with improved function and aesthetics. He regularly collaborates with material scientists and engineers to explore new applications of emerging technologies. Thomas also oversees our quality control processes, ensuring every device meets our exacting standards before delivery to patients.',
    education: [
      'Master of Science in Prosthetics and Orthotics, Northwestern University',
      'Bachelor of Science in Mechanical Engineering, Purdue University',
      'Board Certified in Prosthetics and Orthotics',
      'Certified in CAD/CAM Technology'
    ],
    specialties: ['CAD/CAM Technology', '3D Printing Applications', 'Custom Fabrication', 'Technical Innovation']
  },
  {
    id: 8,
    name: 'Jennifer Martinez, MSPT',
    position: 'Physical Therapist, Gait Training Specialist',
    image: 'https://via.placeholder.com/300x300?text=Jennifer+Martinez',
    shortBio: 'Jennifer specializes in prosthetic gait training and rehabilitation, helping patients maximize function with their devices.',
    fullBio: 'Jennifer Martinez bridges the gap between prosthetic fitting and functional use through her specialized work in gait training and rehabilitation. As our in-house physical therapist, she works closely with our prosthetists to ensure patients not only receive well-fitted devices but also develop the skills to use them effectively. Jennifer conducts comprehensive movement assessments using our gait analysis technology to identify opportunities for improved biomechanics. She develops personalized therapy plans and leads both individual and group training sessions. Jennifer is particularly skilled at motivating patients through challenging rehabilitation phases and helping them achieve their functional goals.',
    education: [
      'Master of Science in Physical Therapy, University of Southern California',
      'Bachelor of Science in Exercise Physiology, San Diego State University',
      'Certified in Prosthetic Gait Training',
      'Licensed Physical Therapist'
    ],
    specialties: ['Prosthetic Gait Training', 'Balance and Mobility', 'Functional Assessment', 'Return to Activity Training']
  }
];