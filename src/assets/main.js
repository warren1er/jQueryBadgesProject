$(function() {

  $.ajax({
    url:'https://www.codeschool.com/users/shendoo.json', dataType: 'jsonp',
    success: function(response){
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses){

    var $badges = $('#badges');

    courses.forEach(function(course){

      console.log(course);

    var $course =  $('<div />',{
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />',{
        text: course.title
      }).appendTo($badges);

      $('<img />',{
        src: course.badge
      }).appendTo($badges);

      $('<a />',{
        href: url,
        target: _blank,
        btn: btn btn-primary,
        text: See Course
      }).appendTo($badges);
    })
  }
});
