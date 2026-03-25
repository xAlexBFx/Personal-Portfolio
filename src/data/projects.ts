export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  deployedGithub: boolean;
  deployed: boolean;
  deployedLink?: string;
}

export const projects: Project[] = [
  {
    title: "Music Reproduction Platform",
    description: "S-Services is an AI-based music reproduction platform that allows users to listen to music from around the world. Allowing the user to interact with other users, settings, profile setup, and more.",
    tech: ["JavaScript", "Node.js", "MongoDB", "CSS", "HTML"],
    image: "https://github.com/user-attachments/assets/10453940-a64e-4839-b71c-c5af38e5847d",
    github: "https://github.com/xAlexBFx/S-Music-Website",
    deployedGithub: true,
    deployed: false,
  },
  {
    title: "Image Manipulator App",
    description: "An image manipulation app that allows users to upload and experience AI training tools like Convolutional kernels in image processing etc.",
    tech: ["React", "Python", "Flask", "HTML", "CSS", "TypeScript"],
    image: "https://github.com/user-attachments/assets/2ba5be81-1f34-40ab-b301-a5f8b2510c07",
    github: "https://github.com/xAlexBFx/Image_Manipulator",
    deployedGithub: true,
    deployed: true,
    deployedLink: "https://image-manipulator.windsurf.build/"
  },
  {
    title: "High School Website",
    description: "My High school's official website that I created and maintained using SquareSpace.",
    tech: ["SquareSpace", "Blender", "GitHub"],
    image: "https://images.squarespace-cdn.com/content/v1/6904d09298f9a31d04520407/1c1e88b5-31f1-48a0-aabc-a8283d456672/BINcA+Logo+good.png?format=1500w",
    github: "",
    deployedGithub: false,
    deployed: true,
    deployedLink: "https://www.bincabps.org"
  },
    {
    title: "BOLO Recognition AI",
    description: "Windows app that uses AI with the focus on Computer Vision. This app is designed to classify objects in, recognize people's faces by name, and explain context of images in ALL in real-time.",
    tech: ["Python", "API", "DeepFace"],
    image: "https://private-user-images.githubusercontent.com/127577835/569373720-26e63181-8f57-40cf-884d-bddf39fcd2a7.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzQ0NzcyNzcsIm5iZiI6MTc3NDQ3Njk3NywicGF0aCI6Ii8xMjc1Nzc4MzUvNTY5MzczNzIwLTI2ZTYzMTgxLThmNTctNDBjZi04ODRkLWJkZGYzOWZjZDJhNy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMyNVQyMjE2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNjQ4MWQ5NGVlMjJjNjEwMTA5MzMwNDlhNzhhZDViOTMwNDgxZTRhNTk2MWI0NTAyYWYwYWVmNjQ5OTg1MTQxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VwZ184bZBFGe5fio_0P0XgXnNFXdVq_vq0TLHBLBvDo",
    github: "https://github.com/xAlexBFx/Facial_Recognition_Project",
    deployedGithub: true,
    deployed: false,
  },
  {
    title: "Task Manager App",
    description: "A task manager app that allows users to manage their tasks and to-dos with a user-friendly interface and a database to store their tasks.",
    tech: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    image: "https://github.com/user-attachments/assets/36fa52cc-2fd4-45ed-ae72-ff1df0ffc2c8",
    github: "https://github.com/xAlexBFx/Tasks-Manager",
    deployedGithub: true,
    deployed: false,
  },
];
