userfe:
	cd user/userfe && yarn install && yarn run build

build_user: userfe
	mv user/userfe/build user/userbe/build

user: build_user
	cd user/userbe && \
	yarn install && \
	yarn dev