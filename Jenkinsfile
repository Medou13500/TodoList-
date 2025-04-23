// Création de la pipeline de mon repo TodoList
pipeline {
    agent any

    stages {
        stage('Check Node.js') {
            steps {
                sh 'node -v'
            }
        }


        // j'exécute le script test.js
        stage('Run JS') {
            steps {
                sh 'node test.js'
            }
        }
    }
}
