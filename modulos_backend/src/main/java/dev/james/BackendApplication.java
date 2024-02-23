package dev.james;

import dev.james.entities.Costumer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		Costumer asd = new Costumer();


		SpringApplication.run(BackendApplication.class, args);
	}

}
