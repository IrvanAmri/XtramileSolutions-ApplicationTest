package com.xtramilesolutions.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseData<T> {
    
    private boolean state;
    private T payload;
    private List<String> messages = new ArrayList<>();
    
}
