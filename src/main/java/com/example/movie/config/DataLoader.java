package com.example.movie.config;

import com.example.movie.model.Movie;
import com.example.movie.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(MovieRepository repository) {
        return args -> {
            repository.saveAll(Arrays.asList(
                new Movie(null, "The Dark Knight", "Action", 9.0, "Batman faces the Joker in a battle for Gotham.", "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Inception", "Sci-Fi", 8.8, "A thief enters the dreams of others to steal their secrets.", "https://images.unsplash.com/photo-1440407876336-62333a6f010f?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "The Matrix", "Sci-Fi", 8.7, "A computer hacker learns about the true nature of his reality.", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Avengers: Endgame", "Action", 8.4, "The Avengers assemble once more to reverse Thanos' actions.", "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Toy Story", "Animation", 8.3, "A cowboy doll is profoundly threatened when a spaceman figure supplants him.", "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Interstellar", "Sci-Fi", 8.6, "A team of explorers travel through a wormhole in space to save humanity.", "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Die Hard", "Action", 8.2, "An NYPD officer tries to save his wife taken hostage by terrorists.", "https://images.unsplash.com/photo-1561149877-84d268ba65b8?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "Spirited Away", "Animation", 8.6, "A 10-year-old girl wanders into a world ruled by gods, witches, and spirits.", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "The Hangover", "Comedy", 7.7, "Three buddies wake up from a bachelor party with no memory of the previous night.", "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=600&q=80"),
                new Movie(null, "The Notebook", "Romance", 7.8, "A poor yet passionate young man falls in love with a rich young woman.", "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80")
            ));
        };
    }
}
