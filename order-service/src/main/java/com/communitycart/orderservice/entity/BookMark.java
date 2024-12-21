package com.communitycart.orderservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "BookMark")
public class BookMark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bookMarkId;
    private Long customerId;
    private Long productId;
}
