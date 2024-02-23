package dev.james.repository;

import dev.james.entities.Costumer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CostumerRepository extends CrudRepository<Costumer, Long> {



}
