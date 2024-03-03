import './ideaCreateMain.scss';

function IdeaCreateMain(){
    return(
        <div className='ideaCreateMain'>
            <h1>Создать новую идею</h1>
            <form action="" method='post'>

                <label htmlFor="ideaTitle">Название идеи</label>
                <input type="text" id='ideaTitle' name='ideaTitle' placeholder='Введите название'/>

                <label htmlFor="ideaCategory">Категория идеи</label>
                <input type="listbox" id='ideaCategory' name='ideaCategory' placeholder='Выберите категорию' />

                <label htmlFor="ideaProblem">Проблема</label>
                <textarea name="ideaProblem" id="ideaProblem" cols="30" rows="10" placeholder='Опишите проблему'></textarea>

                <label htmlFor="ideaSolution">Решение</label>
                <textarea name="ideaSolution" id="ideaSolution" cols="30" rows="10" placeholder='Опишите решение'></textarea>

                <label htmlFor="ideaResult">Результат</label>
                <textarea name="ideaResult" id="ideaResult" cols="30" rows="10" placeholder='Опишите ожидаемый результат'></textarea>

                <label htmlFor="ideaFilial">Филиал</label>   
                <select name="ideaFilial" id='ideaFilial' defaultValue='default'>
                    <option value='default' disabled>Выберите филиал</option>
                    <option value="value1">Красноярск</option>
                    <option value="value2">Москва</option>
                    <option value="value3">Петербург</option>
                </select>

                <label htmlFor="ideaAuthor">Автор</label>
                <input type="text" name='ideaAuthor' id='ideaAuthor' placeholder='Перечислите авторов' />

                <label htmlFor="ideaImg">Выберите обложку</label>
                <input type="image" name='ideaImg' id='ideaImg'/>

                <label htmlFor="ideaFiles">Прикрепить файл</label>
                <input type="file" name='ideaFiles' id='ideaFiles'></input>

                <button type='submit'>Создать</button>
            </form>
        </div>
    )
}

export default IdeaCreateMain;