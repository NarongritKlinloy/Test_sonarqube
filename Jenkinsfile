pipeline {
    agent any

    tools {
        nodejs "node20"   // ตั้งชื่อ NodeJS ใน Jenkins Global Tools
    }

    environment {
        SONARQUBE_TOKEN = credentials('SONARQUBE_TOKEN') 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/NarongritKlinloy/Profile_web-React.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sq1')  {
                    sh """
                        npx sonar-scanner \
                          -Dsonar.projectKey=Profile_web-React \
                          -Dsonar.sources=src \
                          -Dsonar.host.url=http://your-sonar-server:9000 \
                          -Dsonar.login=$SONARQUBE_TOKEN
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
