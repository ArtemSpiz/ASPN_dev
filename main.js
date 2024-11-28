document.querySelectorAll('.questions-texts').forEach(questionstexts => {
	const button = questionstexts.querySelector('.request-image img')
	const textBlock = questionstexts.querySelector('.questions-text')

	textBlock.style.display = 'none'

	questionstexts.addEventListener('click', () => {
		const isOpen = textBlock.style.display === 'block'

		textBlock.style.display = isOpen ? 'none' : 'block'

		button.src = isOpen
			? './src/assets/img/plus.png'
			: './src/assets/img/ic_baseline-minus.png'
	})
})
