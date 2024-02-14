package sr.tm.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @Setter
    private Long id;

    @Getter
    @Column(name = "email")
    @Setter
    private String email;

    @Setter
    @Column( name = "password_hash")
    private String passwordHash;

    @Setter
    @Column(name = "role")
    private String role;


    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Travel> travel = new HashSet<>();

}
