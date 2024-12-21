package com.communitycart.orderservice.repository;

import com.communitycart.orderservice.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    public CartItem deleteByCartId(Long cartId);
}
