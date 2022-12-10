package com.xtramilesolutions.dto;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ResponseData<T> {
    
    private boolean state;
    private T payload;
    private List<String> messages;
    
}
