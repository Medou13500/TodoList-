// Création de la pipeline de mon repo TodoList
pipeline {
    agent any

    stages {
        // récupération du code GitHub
        stage('Checkout') {
            steps {
                git 'https://github.com/Medou13500/TodoList-'
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
