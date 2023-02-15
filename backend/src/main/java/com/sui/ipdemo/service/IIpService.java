package com.sui.ipdemo.service;

import com.sui.ipdemo.entity.Ip;
import java.util.List;

public interface IIpService {
    public Ip create(Ip entity);
    public List<Ip> getList();
    public Ip getById(Long id);
    public Ip updateState(Ip entity);
}
