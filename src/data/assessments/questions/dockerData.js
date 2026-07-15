import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Docker & Containerization assessment.
// Questions progress from Docker fundamentals to Dockerfile quality,
// image builds, networking, volumes, Compose, debugging, security,
// CI/CD, performance, and production container operations.
export const dockerData = {
  id: ASSESSMENT_TYPES.docker,
  title: 'Docker & Containerization Professional Certification',
  shortTitle: 'Docker',
  category: 'DevOps',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  description:
    'Professional Docker assessment covering containers, images, Dockerfile design, layers, build cache, volumes, networking, Docker Compose, registries, debugging, security, image optimization, CI/CD, and production container operations.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical Docker judgment, not only command memorization.',
  questions: [
    {
      id: 'dk-01',
      type: 'mcq',
      title: 'Containers vs VMs',
      prompt: 'What is the primary difference between a container and a virtual machine?',
      options: [
        'Containers are always larger than virtual machines',
        'Containers share the host OS kernel, while virtual machines include a full guest OS',
        'Virtual machines cannot run applications',
        'There is no practical difference'
      ],
      correctIndex: 1,
      explanation:
        'Containers package applications and dependencies while sharing the host kernel, making them lighter than full virtual machines.'
    },
    {
      id: 'dk-02',
      type: 'mcq',
      title: 'Docker Image',
      prompt: 'What is a Docker image?',
      options: [
        'A running process only',
        'A read-only template used to create containers',
        'A graphic file format',
        'A database backup'
      ],
      correctIndex: 1,
      explanation:
        'An image contains the filesystem and metadata needed to create containers.'
    },
    {
      id: 'dk-03',
      type: 'mcq',
      title: 'Container',
      prompt: 'What is a Docker container?',
      options: [
        'A running or stopped instance created from an image',
        'Only a Dockerfile',
        'Only a registry account',
        'A cloud server'
      ],
      correctIndex: 0,
      explanation:
        'A container is an executable instance of an image with its own process, filesystem layer, and runtime configuration.'
    },
    {
      id: 'dk-04',
      type: 'mcq',
      title: 'Dockerfile',
      prompt: 'Which Dockerfile instruction sets the base image?',
      options: ['START', 'FROM', 'BASE', 'RUN'],
      correctIndex: 1,
      explanation:
        'FROM defines the base image for a build stage.'
    },
    {
      id: 'dk-05',
      type: 'mcq',
      title: 'Build Command',
      prompt: 'Which command builds an image from a Dockerfile in the current directory?',
      options: [
        'docker create .',
        'docker build -t myapp .',
        'docker init image',
        'docker run .'
      ],
      correctIndex: 1,
      explanation:
        'docker build -t myapp . builds the image and uses the current directory as the build context.'
    },
    {
      id: 'dk-06',
      type: 'mcq',
      title: 'Build Context',
      prompt: 'What is the Docker build context?',
      options: [
        'The set of files available to the Docker build process',
        'The container CPU limit',
        'The image registry password',
        'The running container logs'
      ],
      correctIndex: 0,
      explanation:
        'The build context is the directory or source sent to the builder so Dockerfile instructions can access files from it.'
    },
    {
      id: 'dk-07',
      type: 'mcq',
      title: '.dockerignore',
      prompt: 'Why should you use a .dockerignore file?',
      options: [
        'To exclude unnecessary or sensitive files from the build context',
        'To delete all Docker images',
        'To disable Docker networking',
        'To make containers run as root'
      ],
      correctIndex: 0,
      explanation:
        '.dockerignore reduces build context size and helps avoid copying secrets, local dependencies, logs, or other unnecessary files.'
    },
    {
      id: 'dk-08',
      type: 'mcq',
      title: 'Layers',
      prompt: 'How does Docker optimize image building using layers?',
      options: [
        'By caching unchanged layers and reusing them in later builds',
        'By deleting all previous images automatically',
        'By ignoring Dockerfile instructions',
        'By turning containers into virtual machines'
      ],
      correctIndex: 0,
      explanation:
        'Docker can reuse cached layers when instructions and relevant files have not changed.'
    },
    {
      id: 'dk-09',
      type: 'mcq',
      title: 'RUN Instruction',
      prompt: 'What does RUN usually do in a Dockerfile?',
      options: [
        'Executes commands during image build and creates a new layer',
        'Starts the final container only',
        'Publishes the image to a registry',
        'Deletes the build context'
      ],
      correctIndex: 0,
      explanation:
        'RUN executes build-time commands such as installing packages or compiling code.'
    },
    {
      id: 'dk-10',
      type: 'mcq',
      title: 'CMD',
      prompt: 'What is the purpose of CMD in a Dockerfile?',
      options: [
        'To define the default command or arguments used when a container starts',
        'To define the base image',
        'To copy files from the host only',
        'To create a volume automatically'
      ],
      correctIndex: 0,
      explanation:
        'CMD provides the default command or arguments for the running container and can be overridden at runtime.'
    },
    {
      id: 'dk-11',
      type: 'mcq',
      title: 'ENTRYPOINT vs CMD',
      prompt: 'What is the best description of ENTRYPOINT and CMD?',
      options: [
        'There is no difference',
        'ENTRYPOINT defines the main executable; CMD often provides default arguments',
        'CMD is only for databases',
        'ENTRYPOINT is only for Windows containers'
      ],
      correctIndex: 1,
      explanation:
        'ENTRYPOINT makes a container behave like an executable, while CMD is commonly used for default arguments.'
    },
    {
      id: 'dk-12',
      type: 'mcq',
      title: 'WORKDIR',
      prompt: 'Which Dockerfile instruction sets the working directory for later instructions?',
      options: ['CD', 'WORKDIR', 'PATH', 'SET'],
      correctIndex: 1,
      explanation:
        'WORKDIR sets the working directory for later RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.'
    },
    {
      id: 'dk-13',
      type: 'mcq',
      title: 'COPY vs ADD',
      prompt: 'When should COPY generally be preferred over ADD?',
      options: [
        'For simple local file copying into the image',
        'Only when downloading remote URLs',
        'Only when extracting compressed archives',
        'Never; ADD is always safer'
      ],
      correctIndex: 0,
      explanation:
        'COPY is more explicit and predictable for normal file copying. ADD has extra behavior such as archive extraction and remote URL support.'
    },
    {
      id: 'dk-14',
      type: 'mcq',
      title: 'Multi-Stage Builds',
      prompt: 'What is a major benefit of multi-stage Docker builds?',
      options: [
        'They make images run without an operating system kernel',
        'They create smaller final images by separating build dependencies from runtime artifacts',
        'They remove the need for testing',
        'They automatically deploy to production'
      ],
      correctIndex: 1,
      explanation:
        'Multi-stage builds allow build tools and intermediate files to stay out of the final runtime image.'
    },
    {
      id: 'dk-15',
      type: 'mcq',
      title: 'Image Size',
      prompt: 'Which practice usually helps reduce Docker image size?',
      options: [
        'Use a smaller base image and copy only required runtime artifacts',
        'Install every debugging tool in the final image',
        'Copy the entire local project including node_modules, logs, and secrets',
        'Use the latest tag everywhere'
      ],
      correctIndex: 0,
      explanation:
        'Smaller base images, clean build contexts, and multi-stage builds help reduce image size and attack surface.'
    },
    {
      id: 'dk-16',
      type: 'mcq',
      title: 'Tags',
      prompt: 'Why is relying only on the latest tag risky in production?',
      options: [
        'It can change unexpectedly and make deployments less reproducible',
        'It makes containers impossible to run',
        'It disables networking',
        'It prevents image pulls'
      ],
      correctIndex: 0,
      explanation:
        'Using explicit version tags or digests improves reproducibility and rollback confidence.'
    },
    {
      id: 'dk-17',
      type: 'mcq',
      title: 'Detached Mode',
      prompt: 'Which command runs a container in detached mode?',
      options: [
        'docker run -b nginx',
        'docker run -d nginx',
        'docker start -new nginx',
        'docker detach nginx'
      ],
      correctIndex: 1,
      explanation:
        'The -d flag runs the container in the background.'
    },
    {
      id: 'dk-18',
      type: 'mcq',
      title: 'Port Mapping',
      prompt: 'What does -p 8080:80 mean in docker run?',
      options: [
        'Maps host port 8080 to container port 80',
        'Allocates 8080 MB of RAM',
        'Sets container priority to 80',
        'Creates 80 containers'
      ],
      correctIndex: 0,
      explanation:
        'The format is hostPort:containerPort, so traffic to host port 8080 is forwarded to port 80 inside the container.'
    },
    {
      id: 'dk-19',
      type: 'mcq',
      title: 'Logs',
      prompt: 'How do you view stdout and stderr output from a container?',
      options: [
        'docker view container_id',
        'docker logs container_id',
        'docker print container_id',
        'docker history container_id'
      ],
      correctIndex: 1,
      explanation:
        'docker logs retrieves logs written by the container to stdout and stderr.'
    },
    {
      id: 'dk-20',
      type: 'mcq',
      title: 'Exec',
      prompt: 'Which command runs a shell inside an already running container?',
      options: [
        'docker start -it container_id /bin/bash',
        'docker exec -it container_id /bin/bash',
        'docker build -it container_id',
        'docker attach-new container_id'
      ],
      correctIndex: 1,
      explanation:
        'docker exec runs a new command inside a running container.'
    },
    {
      id: 'dk-21',
      type: 'mcq',
      title: 'stop vs kill',
      prompt: 'What is the difference between docker stop and docker kill?',
      options: [
        'There is no difference',
        'docker stop sends a graceful termination signal first; docker kill terminates immediately',
        'docker kill is always safer',
        'docker stop only works on images'
      ],
      correctIndex: 1,
      explanation:
        'docker stop allows graceful shutdown before forceful termination, while docker kill sends an immediate kill signal.'
    },
    {
      id: 'dk-22',
      type: 'mcq',
      title: 'Container Lifecycle',
      prompt: 'What happens to data written only inside a container writable layer when the container is removed?',
      options: [
        'It is usually lost unless stored in a volume or bind mount',
        'It is automatically saved forever',
        'It is pushed to Docker Hub',
        'It becomes a new image automatically'
      ],
      correctIndex: 0,
      explanation:
        'Container writable layers are tied to container lifecycle. Persistent data should use volumes or external storage.'
    },
    {
      id: 'dk-23',
      type: 'mcq',
      title: 'Volumes',
      prompt: 'What is a Docker volume mainly used for?',
      options: [
        'Persistent data storage outside the container lifecycle',
        'Increasing CPU clock speed',
        'Changing the base image',
        'Replacing a Dockerfile'
      ],
      correctIndex: 0,
      explanation:
        'Volumes store data independently of a container, so data can survive container removal or replacement.'
    },
    {
      id: 'dk-24',
      type: 'mcq',
      title: 'Bind Mount vs Volume',
      prompt: 'Which statement best describes a bind mount?',
      options: [
        'It mounts a specific host path into the container',
        'It always stores data in Docker-managed storage only',
        'It creates a new image layer',
        'It disables file access'
      ],
      correctIndex: 0,
      explanation:
        'Bind mounts map an explicit host filesystem path into the container, while Docker volumes are managed by Docker.'
    },
    {
      id: 'dk-25',
      type: 'mcq',
      title: 'Networking',
      prompt: 'What is Docker’s default network driver for standalone containers?',
      options: ['host', 'bridge', 'none', 'overlay'],
      correctIndex: 1,
      explanation:
        'The default bridge network allows containers on the same host to communicate through Docker networking.'
    },
    {
      id: 'dk-26',
      type: 'mcq',
      title: 'User-Defined Network',
      prompt: 'Why are user-defined Docker bridge networks useful?',
      options: [
        'They allow containers to communicate by service/container name and provide better isolation than the default bridge',
        'They remove the need for ports inside containers',
        'They automatically deploy to Kubernetes',
        'They make all containers public on the internet'
      ],
      correctIndex: 0,
      explanation:
        'User-defined networks provide built-in DNS-based discovery and cleaner isolation for related containers.'
    },
    {
      id: 'dk-27',
      type: 'mcq',
      title: 'Host Network',
      prompt: 'What does host network mode do?',
      options: [
        'It shares the host network namespace with the container',
        'It disables all networking',
        'It creates a new private bridge network',
        'It stores network data in a volume'
      ],
      correctIndex: 0,
      explanation:
        'Host networking removes network namespace isolation for the container and uses the host network stack directly.'
    },
    {
      id: 'dk-28',
      type: 'mcq',
      title: 'Docker Compose',
      prompt: 'What is Docker Compose used for?',
      options: [
        'Defining and running multi-container applications using a YAML configuration',
        'Editing Python code',
        'Replacing all image registries',
        'Managing only single static files'
      ],
      correctIndex: 0,
      explanation:
        'Compose lets you define related services such as app, database, cache, networks, and volumes in one file.'
    },
    {
      id: 'dk-29',
      type: 'mcq',
      title: 'Compose Services',
      prompt: 'In a Compose file, what is a service?',
      options: [
        'A definition of a containerized component such as web, api, db, or cache',
        'Only a physical server',
        'Only a Docker Hub account',
        'A local text editor plugin'
      ],
      correctIndex: 0,
      explanation:
        'A Compose service defines how a containerized component should run, including its image/build, ports, environment, volumes, and dependencies.'
    },
    {
      id: 'dk-30',
      type: 'mcq',
      title: 'depends_on',
      prompt: 'What is a common limitation of depends_on in Docker Compose without health conditions?',
      options: [
        'It may control startup order but does not necessarily mean the dependency is ready to accept traffic',
        'It disables container networking',
        'It deletes dependent services',
        'It builds images twice'
      ],
      correctIndex: 0,
      explanation:
        'Startup order is not the same as application readiness. Health checks or wait logic may be needed.'
    },
    {
      id: 'dk-31',
      type: 'mcq',
      title: 'Healthcheck',
      prompt: 'What is the purpose of a container health check?',
      options: [
        'To determine whether the application inside the container is healthy, not merely running',
        'To reduce image size automatically',
        'To replace logs',
        'To encrypt container files'
      ],
      correctIndex: 0,
      explanation:
        'A process can be running while the application is unhealthy. Health checks provide a stronger readiness signal.'
    },
    {
      id: 'dk-32',
      type: 'mcq',
      title: 'Environment Variables',
      prompt: 'What is a common use of environment variables in containers?',
      options: [
        'Passing runtime configuration such as database host, port, mode, or feature flags',
        'Changing the container image layers after build',
        'Replacing all application code',
        'Deleting Docker networks'
      ],
      correctIndex: 0,
      explanation:
        'Environment variables are commonly used to pass runtime configuration without rebuilding the image.'
    },
    {
      id: 'dk-33',
      type: 'mcq',
      title: 'Secrets',
      prompt: 'Which practice is safest for handling secrets in Docker workflows?',
      options: [
        'Hardcode secrets in the Dockerfile',
        'Copy .env files with passwords into the final image',
        'Use a secrets manager or Docker/CI secret mechanism and avoid baking secrets into images',
        'Print all secrets in container logs for debugging'
      ],
      correctIndex: 2,
      explanation:
        'Secrets should not be baked into images or committed to source control. Use secure secret injection mechanisms.'
    },
    {
      id: 'dk-34',
      type: 'mcq',
      title: 'Running as Root',
      prompt: 'Why should production containers usually avoid running as root when possible?',
      options: [
        'It reduces the impact if the application or container is compromised',
        'It makes the image impossible to run',
        'It disables all file permissions',
        'It is required only for frontend apps'
      ],
      correctIndex: 0,
      explanation:
        'Least privilege reduces the blast radius of security issues.'
    },
    {
      id: 'dk-35',
      type: 'mcq',
      title: 'Image Scanning',
      prompt: 'Why should container images be scanned in CI/CD?',
      options: [
        'To detect known vulnerabilities, risky dependencies, or policy violations before deployment',
        'To make the image visually attractive',
        'To increase image size',
        'To replace unit tests'
      ],
      correctIndex: 0,
      explanation:
        'Image scanning helps catch vulnerable packages and policy issues before images reach production.'
    },
    {
      id: 'dk-36',
      type: 'mcq',
      title: 'Registry',
      prompt: 'Where are Docker images commonly stored and shared?',
      options: [
        'Image registries such as Docker Hub or private registries',
        'Only local browser cache',
        'Only inside package.json',
        'Only in HTML files'
      ],
      correctIndex: 0,
      explanation:
        'Registries store image repositories and tags so teams and deployment systems can pull images.'
    },
    {
      id: 'dk-37',
      type: 'mcq',
      title: 'Prune',
      prompt: 'What does docker system prune generally remove?',
      options: [
        'Unused Docker data such as stopped containers, unused networks, dangling images, and build cache depending on flags',
        'All files from the operating system',
        'Only running containers',
        'Only registry credentials'
      ],
      correctIndex: 0,
      explanation:
        'Prune commands free disk space by removing unused Docker resources, but should be used carefully.'
    },
    {
      id: 'dk-38',
      type: 'mcq',
      title: 'Container Debugging',
      prompt: 'A container exits immediately after starting. What should you check first?',
      options: [
        'Container logs, exit code, command/entrypoint, environment variables, and missing dependencies',
        'Only the host wallpaper',
        'Only Docker Hub homepage',
        'Only the image logo'
      ],
      correctIndex: 0,
      explanation:
        'Startup failures are usually diagnosed from logs, exit codes, runtime command, configuration, and dependency availability.'
    },
    {
      id: 'dk-39',
      type: 'mcq',
      title: 'Performance Troubleshooting',
      prompt: 'A containerized API is slow under load. What should you inspect?',
      options: [
        'CPU, memory, network, disk I/O, application traces, dependency latency, and resource limits',
        'Only the container name',
        'Only the Dockerfile comments',
        'Only the local terminal theme'
      ],
      correctIndex: 0,
      explanation:
        'Container performance issues require both system-level and application-level signals.'
    },
    {
      id: 'dk-40',
      type: 'mcq',
      title: 'Production Docker Judgment',
      prompt: 'Which Docker setup is most production-ready?',
      options: [
        'A large image using latest, running as root, with secrets copied into the image and no health check',
        'A small version-pinned image, non-root user where possible, secrets injected securely, health checks, logs to stdout/stderr, and CI vulnerability scanning',
        'A container that only works on one developer laptop',
        'A Dockerfile that copies the entire home directory into the image'
      ],
      correctIndex: 1,
      explanation:
        'Production-ready containers should be reproducible, minimal, secure, observable, and safe to operate.'
    }
  ]
};