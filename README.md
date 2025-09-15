Overview

This repository contains the source code and documentation for my practical work in Module 293, emphasizing the integration of containerization in software development. It features:

HTML/CSS/JavaScript: For building the user interface.

Docker: To containerize the application for consistent environments.

Kubernetes: For orchestrating and scaling containerized applications.

Features

Modular Architecture: Promotes maintainability and scalability.

Docker Support: Facilitates easy setup and deployment.

Kubernetes Configuration: Includes manifests for deploying to a Kubernetes cluster.

Getting Started

Clone the repository:

git clone https://github.com/FelipeOCar/Praxisarbeitmodul293.git


Navigate into the project directory:

cd Praxisarbeitmodul293


Build the Docker image:

docker build -t praxisarbeitmodul293 .


Run the application:

docker run -p 8080:80 praxisarbeitmodul293
