package com.communitycart.orderservice.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

/**
 * DTO for bookmarked products of a customer.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ViewBookMarkDTO {

    private Long customerId;
    private List<ProductDTO> products;

}
