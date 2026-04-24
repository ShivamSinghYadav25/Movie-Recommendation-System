# 🎬 Movie Recommendation System

A full-stack Spring Boot and vanilla web application designed to manage and recommend movies based on genre. 

## 🚀 Features

- **View All Movies:** Browse a complete collection of saved movies.
- **Add New Movies:** Seamlessly add new movies with details like title, genre, rating, description, and an image URL.
- **Get Recommendations:** Select a specific genre to receive highly-rated movie recommendations instantly.
- **Responsive UI:** A modern, visually appealing interface using HTML, CSS, and JavaScript.

## 🛠️ Technologies Used

- **Backend:** Java 17, Spring Boot 3.2.4, Spring Web, Spring Data JPA
- **Database:** MySQL
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Tools:** Maven, Lombok

## ⚙️ Local Setup Instructions

Follow these steps to run the project locally on your machine.

### 1. Database Configuration
This project uses MySQL. Before starting the application, ensure your MySQL server is running on port `3306`.

Open your MySQL command line or a GUI tool (like MySQL Workbench) and run the following command to create the required database:
```sql
CREATE DATABASE mrsdb;
```

*(Note: The default credentials configured in `application.properties` are username: `root` and password: `shivam9500@`. Please update `src/main/resources/application.properties` if your local MySQL credentials differ.)*

### 2. Run the Application
Open your terminal/command prompt, navigate to the root folder of this project, and run the following Maven command:

**On Windows:**
```powershell
.\mvnw.cmd spring-boot:run
```

**On Mac/Linux:**
```bash
./mvnw spring-boot:run
```

### 3. Access the Application
Once the Spring Boot application has successfully started, open your web browser and navigate to:
👉 **`http://localhost:8080`**

## 🔌 API Endpoints

The backend exposes the following RESTful API endpoints:

- `GET /api/movies` - Retrieve a list of all movies.
- `POST /api/movies` - Add a new movie to the database.
- `GET /api/movies/recommend?genre={genreName}` - Get a list of movie recommendations filtered by genre, sorted by highest rating.

---
*Created by [Shivam Singh Yadav](https://github.com/ShivamSinghYadav25)*