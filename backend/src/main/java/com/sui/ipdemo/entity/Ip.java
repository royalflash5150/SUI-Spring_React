package com.sui.ipdemo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "Ip")
public class Ip {
    @Id
    Long id;

    @Column(name = "ip", nullable = false)
    String ip;

    @Column(name = "state", nullable = false)
    String state;
}
