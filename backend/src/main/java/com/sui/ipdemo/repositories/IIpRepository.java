package com.sui.ipdemo.repositories;

import com.sui.ipdemo.entity.Ip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IIpRepository extends JpaRepository<Ip, Long> {
}
