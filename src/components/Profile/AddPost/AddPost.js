import React from 'react'
import style from './AddPost.module.css'
import MyPosts from './MyPosts/MyPosts';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm'

const AddPost = (props) => {

	let postsElement = props.posts.map(p => <MyPosts img={p.img} key={p.id} message={p.message} />)

	let addNewPost = (values) => {
		props.addPost(values.newPostText)
	}

	return (
		<div className={style.content__addpost}>
			<h2 className='title'>My posts</h2>
			<AddNewPostForm onSubmit={addNewPost} />
			<div className={style.posts}>
				{postsElement}
			</div>
		</div>

	)
}

export default AddPost