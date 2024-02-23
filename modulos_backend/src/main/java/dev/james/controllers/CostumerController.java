package dev.james.controllers;

import dev.james.entities.Costumer;

import dev.james.services.ICostumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CostumerController {

    @Autowired
    private ICostumerService service;

    @GetMapping("/api/costumers")
    public List<Costumer> getAll(){
        return  service.getAll();
    }

    @GetMapping("/api/costumers/{id}")
    public Costumer getById(@PathVariable String id ){
        return  service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/costumers/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/costumers")
    public void save( @RequestBody Costumer costumer){
        service.save(costumer);
    }

}
