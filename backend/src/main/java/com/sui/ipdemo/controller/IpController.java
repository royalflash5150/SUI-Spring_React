package com.sui.ipdemo.controller;

import com.sui.ipdemo.entity.Ip;
import com.sui.ipdemo.service.impl.IpServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class IpController {
    @Autowired
    IpServiceImpl ipService;

    @GetMapping(value = "/getList")
    public ResponseEntity<List<Ip>> getList() {
        return ResponseEntity.ok(ipService.getList());
    }

    @GetMapping(value = "/getById/{id}")
    public ResponseEntity<Ip> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ipService.getById(id));
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Ip> create(@RequestBody Ip entity) {
        return ResponseEntity.ok(ipService.create(entity));
    }

    @PostMapping(value = "/updateState")
    public ResponseEntity<Ip> updateState(@RequestBody Ip entity) {
        return ResponseEntity.ok(ipService.updateState(entity));
    }
}
