# docker build -t fantasy-crypto .
# docker tag fantasy-crypto antoniokaplan/fantasy-crypto:1
# docker push antoniokaplan/fantasy-crypto:1

# docker pull antoniokaplan/fantasy-crypto:1
# docker run --rm -d -p 3000:80 -e "REACT_APP_API_URL=http://ip172-18-0-14-bnnc928t9690009bb820-8000.direct.labs.play-with-docker.com/" antoniokaplan/fantasy-crypto:1


FROM nginx:1.14.0-alpine

ADD /build /usr/html/
ADD /default.conf /etc/nginx/conf.d/default.conf



EXPOSE 80
