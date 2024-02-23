package dev.james.services;

import dev.james.entities.Costumer;

import java.util.List;

public interface ICostumerService {
    List<Costumer> getAll();
    Costumer getById(Long id);
    void  remove(Long id );
    void  save(Costumer costumer);
}
