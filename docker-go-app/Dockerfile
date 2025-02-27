FROM golang:1.24.0-alpine AS builder
RUN apk add --update --no-cache \
  build-base \ 
  upx
WORKDIR /go/src/app
COPY src/app /go/src/app
RUN CGO_ENABLED=0 GOOS=linux \
  go build -a -installsuffix cgo -ldflags="-s -w" -o target/hello_app ./hello.go && \
  upx target/hello_app

FROM scratch
WORKDIR /root/
COPY --from=builder /go/src/app/target/hello_app .
ENTRYPOINT [ "./hello_app" ]
