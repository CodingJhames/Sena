package dev.james.services;

import dev.james.entities.Costumer;
import dev.james.repository.CostumerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CostumerService implements  ICostumerService {

    @Autowired
    private CostumerRepository repository;

    @Override
    public List<Costumer> getAll(){
        return (List<Costumer>) repository.findAll();
    }

    @Override
    public Costumer getById(Long id) {
        return (Costumer) repository.findById(id).get();
    }

    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }

    @Override
    public void save(Costumer costumer){
        repository.save(costumer);
    }

}
