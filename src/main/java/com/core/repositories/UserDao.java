package com.core.repositories;

import com.core.entities.User;
import org.springframework.data.repository.*;

import javax.transaction.Transactional;

@Transactional
public interface UserDao extends CrudRepository<User, Long> {
//    Page<User> findAll(Pageable pageable);

    public User findByEmail(String email);
}
