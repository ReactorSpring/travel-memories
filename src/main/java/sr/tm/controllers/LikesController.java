package sr.tm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sr.tm.models.Likes;
import sr.tm.services.LikesService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("http://localhost:3000")
public class LikesController {
    private final LikesService likesService;

    @Autowired
    public LikesController(LikesService likesService) {
        this.likesService = likesService;
    }

    @GetMapping("/likes")
    public Page<Likes> getLikes(
                                @RequestParam(name = "photo_id", required = true, defaultValue = "") String photoId,
                                @RequestParam(name = "page", required = false, defaultValue = "0") int page,
                                @RequestParam(name = "pageSize", required = false, defaultValue = "20") int pageSize){
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        return likesService.getAllLikesByPhotoId(photoId, pageRequest);
    }

    @PutMapping("/like/save")
    public ResponseEntity<Boolean> addLike(@RequestParam("photoId") Long photoID,
                                           @RequestParam("userId") Long userID) {
        try{
            boolean addedLike = likesService.save(photoID, userID);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedLike);
        }catch(RuntimeException e ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
