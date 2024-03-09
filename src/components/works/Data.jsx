import Resto from "../../assets/resto.png";
import Filament from "../../assets/filament.png";
import Medium from "../../assets/medium.png";
import Backend1 from "../../assets/backend1.png";
import Frontend1 from "../../assets/frontend1.png";
import HMS from "../../assets/backend3.png";
import Node from "../../assets/node.jpg";

export const data = [
  {
    id: 1,
    image: Filament,
    title: "Filament Admin Panel",
    category: "PHP (Laravel)",
    repo_link: "https://github.com/aomkhamphaung/Filament",
    description:
      "Filament Admin Panel streamlines online platform management with user-friendly tools. It enables CRUD operations for users, items, and blog content. With role-based access control, administrators can efficiently manage permissions and roles. Integrated with MySQL, it ensures reliability and scalability in data management, providing a robust solution for efficient administration.",
  },
  {
    id: 2,
    image: Medium,
    title: "Medium Social Media",
    category: "PHP (Laravel)",
    repo_link: "https://github.com/aomkhamphaung/medium",
    description:
      "Medium inspired blog site with user authentication, authorization, and seamless social media login via Laravel Socialite. Implemented interactive features like liking, unliking, and commenting for enhanced user engagement. Ensured data security and privacy with robust authentication measures, meeting project requirements within the set timeline.",
  },
  {
    id: 3,
    image: HMS,
    title: "Hospital Management System",
    category: "PHP (Laravel)",
    repo_link:
      "https://github.com/aomkhamphaung/hospital_appointment_management_system",
    description:
      "Built on Laravel with Jetstream for comprehensive authentication, our Hospital Management System integrates Laravel mailing for appointment scheduling. It features an admin panel for seamless employee CRUD operations. The system ensures efficient hospital operations, robust authentication, and empowers administrators with streamlined employee management capabilities.",
  },
  {
    id: 4,
    image: Backend1,
    title: "Sweet Cake",
    category: "PHP (Laravel)",
    repo_link: "https://github.com/aomkhamphaung/Bakery_ordering_system",
    description:
      "Bakery Ordering System, crafted in pure PHP, leverages MySQL for database management and integrates Bootstrap templates for a visually appealing interface. With Ajax implementation, it offers seamless and dynamic user experiences. The system streamlines bakery operations, facilitating efficient ordering and management processes with modern web technologies.",
  },
  {
    id: 5,
    image: Node,
    title: "Exercise Tracker",
    category: "NodeJS",
    repo_link: "https://github.com/aomkhamphaung/exercise-tracker",
    description:
      "Node API, a robust exercise tracker, utilizes MongoDB as its database, emphasizing the relationship between users and exercises. It showcases advanced MongoDB filtering functions, enhancing data retrieval efficiency. This API offers seamless interaction, allowing users to track exercises effectively while maintaining a structured and scalable database architecture.",
  },
  {
    id: 6,
    image: Node,
    title: "URL Shortener",
    category: "NodeJS",
    repo_link: "https://github.com/aomkhamphaung/url-shortener",
    description:
      "Node API project, the URL Shortener, employs MongoDB to efficiently shorten input URLs and manage redirections seamlessly. Users can generate concise URLs, which when accessed, redirect to the original link. Leveraging MongoDB's robust capabilities, this project ensures reliability and scalability in URL management, offering a streamlined solution for link shortening and redirection.",
  },
  {
    id: 7,
    image: Resto,
    title: "Resto",
    category: "Template",
    repo_link: "https://github.com/aomkhamphaung/Resto",
    demo_link: "https://aomkhamphaung.github.io/Final_project/",
    description:
      "Resto is a responsive restaurant order management template designed with HTML, CSS, JavaScript, and Bootstrap. It offers a visually appealing interface for showcasing menu items and provides a foundation for building a fully functional order management system.",
  },
  {
    id: 8,
    image: Frontend1,
    title: "Movie Land",
    category: "Template",
    repo_link: "https://github.com/aomkhamphaung/MovieLand",
    description:
      "Movie Land is a dynamic web application built with React, leveraging open-source APIs for comprehensive movie data. Offering a seamless user experience, it provides extensive information on movies, including ratings, reviews, and trailers. With React's versatility and real-time data integration, Movie Land delivers a rich and engaging platform for movie enthusiasts.",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "PHP (Laravel)",
  },
  {
    name: "NodeJS",
  },
  {
    name: "Template",
  },
];
