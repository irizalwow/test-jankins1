pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building.. ${TEST}"
                echo 'Building.. %TEST%' 
                echo 'Building.. %TEST' 
                echo "ENVIRONMENT: ${TEST}"
                echo "TEST: %TEST%"
                // powershell 'sfdx force:org:list'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                emailext attachmentsPattern: attachPatternStr, 
                body: "test",
                mimeType: 'text/html',
                subject: "test",
                to: "aredondof@viewnext.com",
                from: "jcordero@viewnext.com"
            }
        }
    }
}