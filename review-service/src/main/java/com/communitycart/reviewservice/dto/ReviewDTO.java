package com.communitycart.reviewservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Review DTO for product review and rating.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReviewDTO {

    private Long reviewId;
    private Integer rating;
    private String review;
    private Long productId;
    private Long customerId;

}
