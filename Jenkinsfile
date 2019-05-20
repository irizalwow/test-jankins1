pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'HOLA ESTAMOS AQUI BUILDEANDO'
        sh 'mkdir holaCaracola'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy..'
      }
    }
  }
}