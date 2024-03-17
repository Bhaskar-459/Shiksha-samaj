const containerR= document.querySelector('.container-right');
const description= document.querySelector('.description');
const comments= document.querySelector('.comments');
const livechat= document.querySelector('.live-chat');
const quiz= document.querySelector('.quiz');
const resources= document.querySelector('.resources');

const descriptionBtn= document.getElementById('description');
const commentsBtn= document.getElementById('comments');
const livechatBtn= document.getElementById('livechat');
const quizBtn= document.getElementById('quiz');
const resourcesBtn= document.getElementById('resources');

descriptionBtn.addEventListener('click', function(){

    description.classList.remove('hidden');
    comments.classList.add('hidden');
    livechat.classList.add('hidden');
    quiz.classList.add('hidden');
    resources.classList.add('hidden');
});

commentsBtn.addEventListener('click', function(){
    description.classList.add('hidden');
    comments.classList.remove('hidden');
    livechat.classList.add('hidden');
    quiz.classList.add('hidden');
    resources.classList.add('hidden');
});
livechatBtn.addEventListener('click', function(){
    description.classList.add('hidden');
    comments.classList.add('hidden');
    livechat.classList.remove('hidden');
    quiz.classList.add('hidden');
    resources.classList.add('hidden');
});
quizBtn.addEventListener('click', function(){
    description.classList.add('hidden');
    comments.classList.add('hidden');
    livechat.classList.add('hidden');
    quiz.classList.remove('hidden');
    resources.classList.add('hidden');
}); 
resourcesBtn.addEventListener('click', function(){
    description.classList.add('hidden');
    comments.classList.add('hidden');
    livechat.classList.add('hidden');
    quiz.classList.add('hidden');
    resources.classList.remove('hidden');
}); 
