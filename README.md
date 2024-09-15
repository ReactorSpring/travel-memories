[![Java CI with Maven](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/maven.yml/badge.svg)](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/maven.yml) [![CodeQL](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/github-code-scanning/codeql) [![Codespaces Prebuilds](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/codespaces/create_codespaces_prebuilds/badge.svg)](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/codespaces/create_codespaces_prebuilds) [![Snyk Security](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/snyk-security.yml/badge.svg)](https://github.com/TravelMemories/TravelMemories.github.io/actions/workflows/snyk-security.yml)
# TravelMemories.github.io

The design of a web application, TravelMemories.github.io social network, based on react (TypeScript) and spring (Java), the project is carried out in accordance with the principles of Agile and Software Engineering. The project is a finished solution that a medium-sized team of developers and testers can work on under the management of devOps. The project is run in CI practice, constantly supervised by build system and deployment service.

## Development info for contributors
When committing something to the repo, remember to add an issue to the project and add it to the project, mark it on the roadmap

I've configured codespaces so that you don't need to insatlate additional packages or deps.
mvn spring-boot:run launches server backend and front, npm start launched from ./frontend launches frontend which will be updated with yours code changes

## Preview 
![homepage](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/7a263ba3-eb56-4732-9d4d-e56fdd521157)

![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/895ddfbe-09ab-43ee-9607-60dd1d0cede6)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/b23882b7-2a75-4642-958d-5f5ec6e018ba)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/6e44245f-9c13-4abb-b65d-320946a8d794)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/ee9401d8-f238-4773-8dda-bba6800e62bb)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/1da98238-9c16-44a2-a6c0-f84bd11f0cdf)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/07034f5b-f412-4c9c-9aaa-f6a95608e573)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/3e3d7dfc-8035-4655-91ba-41753bfa1d86)
![image](https://github.com/Fijalkowskim/TravelMemories/assets/91847461/ef7dfa6f-ea8d-47d8-b725-794311019cc7)


## Key Features:

### User Authentication and Account Management
- Users can create accounts, log in, and securely manage their profiles.
- Account deletion functionality is available for users who wish to remove their accounts.

### Journey Creation and Stage Management
- Create and customize your travel journeys effortlessly.
- Define stages within each journey to represent different phases or locations of your trip.

### Photo Uploads and Privacy Settings
- Users can upload photos from their vacations and associate them with specific journey stages.
- Photos can be set as private or public, offering users control over their content's visibility.
- Public photos are accessible to all users through the Public Memories Page.

### Public Memories Page
- Explore a curated collection of public photos uploaded by other users.
- Interact with the community by liking and commenting on shared memories.

### Google Maps Integration
- Enjoy an integrated Google Maps experience that allows users to select and display locations for each journey, stage, or photo.

### Slideshow Feature
- When there's at least one photo in a journey, users can initiate a synchronized slideshow showcasing the entire trip.

### Database Synchronization
- All data, including user profiles, journeys, stages, and photos, is seamlessly synchronized with the MySQL database.

### How to run
mvn spring-boot:run

Pay attention to whether your commits are built on the server

## Deployment 

Github pages deployment: https://travelmemories.github.io/

Vercel deployment on custom domain: https://www.travel-memories.social/

## Contributors 
<a href="https://github.com/TravelMemories/TravelMemories.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TravelMemories/TravelMemories.github.io"/>
</a>
