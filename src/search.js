const MBS_SEARCH = document.getElementById('H_Search');
const searchInputGroup = document.querySelector('#H_Search .input-group');
const searchInput = document.querySelector('#H_Search .input-group input');
const searchLi = document.querySelector('li.search');
const itemSearchWrapper = document.querySelector('.itemSearchWrapper');

MBS_SEARCH.classList.remove('max_width300');
MBS_SEARCH.style.display = 'block';

itemSearchWrapper ? itemSearchWrapper.classList.remove('max_width300') : '';

searchInput.setAttribute('type', 'search');
searchInput.setAttribute('placeholder', 'Search...');

searchLi.append(MBS_SEARCH);
