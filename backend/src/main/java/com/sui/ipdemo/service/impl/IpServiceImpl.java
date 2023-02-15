package com.sui.ipdemo.service.impl;

import com.sui.ipdemo.entity.Ip;
import com.sui.ipdemo.repositories.IIpRepository;
import com.sui.ipdemo.service.IIpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IpServiceImpl implements IIpService {
    @Autowired
    IIpRepository ipRepository;

    public List<Ip> getList() {
        return ipRepository.findAll();
    }

    public Ip getById(Long id) {
        Optional<Ip> optional = ipRepository.findById(id);
        if(optional.isPresent()) {
            return optional.get();
        }
        return null;
    }

    public Ip create(Ip entity) {
        return ipRepository.save(entity);
    }

    public Ip updateState(Ip entity) {
        Optional<Ip> optional = ipRepository.findById(entity.getId());
        if(optional.isPresent()) {
            Ip obj = optional.get();
            obj.setState(entity.getState());
            return ipRepository.save(obj);
        }
        return null;
    }
}
