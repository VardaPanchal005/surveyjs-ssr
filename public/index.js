const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
  

    const surveyData = sender.data; 
    sendSurveyData(surveyData);
});

$("#surveyElement").Survey({ model: survey });

const sendSurveyData = (data) => {
    window.$.ajax({
        url: "https://apim.quickwork.co/employeelogin/mypath/version/assignedpath", 
        data: JSON.stringify(data), 
        contentType: 'application/json;charset=utf-8', 
        type: "POST", 
        headers: { 'ApiKey': "JjUNK0e7DGwu2A9rTjvJWZ3YHcxdKrE4" },  
        success: function(response) {
            alert('Survey submitted successfully!');
            console.log('Response:', response);
        },
        error: function(xhr, status, error) {
            alert('Failed to submit survey. Please try again.');
            console.error('Error:', error);
        }
    });
};
