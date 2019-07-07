const modulus = require(".");

const cert = `-----BEGIN CERTIFICATE-----
MIIC0TCCAbkCAQEwDQYJKoZIhvcNAQEFBQAwRzELMAkGA1UEBhMCR0IxEzARBgNV
BAgMCkNoZWx0ZW5oYW0xDzANBgNVBAoMBlJpcGphcjESMBAGA1UEAwwJUmlwamFy
IENBMB4XDTE5MDQxNTEyNDgzMFoXDTQ2MDgzMTEyNDgzMFowFjEUMBIGA1UEAwwL
SmFtZXMgTW94b24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDNpKKs
xlWUokSUY1XBRRHlkkz5BKnr8xtb3FPJeOElouDKZTNjF/15V4z3sz/rm3iTioJw
5PJu3y/Yzg5X1eg4SL90QkuKlqwPHLuoGhh+38JCmsPlwlBf3bQp0TET0RogTHPJ
i9W+66FwkOSd1PmzX5jAcFn4WtyBIISFPoRsRBeGvHEuPDsSai3fBES2kqWt/SMm
Qeqv3B0vt14wSlCvllqtKhWQ2enghGaWDgmM9tW/HOUCH+Ajeag9W92gMrF61qxC
rsJK5PK98jFEoE+IUcnG3e3NiOrwhXf+FYc+eejB//e1BUgcOBMvrKzEM6K1HP2P
woPHPRfp6Ayaeq+vAgMBAAEwDQYJKoZIhvcNAQEFBQADggEBAFNGe7so0G+nZcl0
Lr/76IWO+3U0aZVeY2lOqyhICWxqexspSvfCJB5Zs3fh/HAMGhGCz0HueLY7/zoJ
E+sOtOx1zmqNxKGR9U8jEv578ou24atyRWmXcTY67Sld+zGES3tnJeF7VZZ0wTed
1y3i/KxxWxxob2W7ub0K6ULu6st3upVZ0K3T20gaqJ1gfnJEKUsOFocDX4WjTo13
+NlMQw7Fhzt4rqzrRaam2y/hye/Vnvu81K+rbi8vC8bmH1lFttlXfic+0bYiLNzc
sBbSr3qHmq2mLUtiBnAgBniIaVjBu0yssdkod3BLUwka2inUtVsynrB/rF3XUbbt
ZsP1whw=
-----END CERTIFICATE-----
`;

const rsakey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAsOeagT/JqvjsM7BEdEcRRYGGzgnEoVfe45W0HFIePdjw2n/e
cw2aJQ/7gj6TFoEU6+F+HmTV83uBtuUrkNEiyvFbSiQio87DnQL6ObknsNaye6u2
Fvgl83rnzdaKL+RVkWZqyInwUcvaMGRUpHUmEeyKaqX0oQZnHRO7MVXRktjuUiuZ
qPfdAaghCijPLa0i0ApcpaYL4GHarSrI9NC7sWmEPTc5xSixcE0KFoFk7GBhckZv
2jGIWxRwRRy38piQ+4nrYftMV3LGFn0EpBE89TeOKmrnvF9SCVbMhU1bMwOockEJ
m6XGjw12LPbLqI4LE5Tqm2z8UYD2vdVgJTQVhwIDAQABAoIBAEbV1lYetp/RYLMp
x59Pvai5PsNNwgBg8QzsKtyUPSvCrF6xiN9E+Q4SIkF60ObX9QqmlhuRgOIn+D7F
8PXh6C6fClDbu0sgRc+fG5b1fuEedwVyMk1sO7YM5rjTSS34HhNEkUmPgj0ehVWP
Nx1LE11l+97MaPH5YFySRAhzNqG3tDNhmF+8Od91DMvZ4TRYFXikO0mO5HeO+5FD
X0SDokeslGW8QFRVKAs7bEXqT6XRkYfuod62o4MZy2PQ4VwKAXk16eCAyxQLXKB2
SP9m+0cxax/x/N7PgIioLSD17d3kJizcI33dC1OptcKGFPyzRcRQwiXdK+SLfTfU
t8iRiyECgYEA6gvONXBbHJWVxOAfPpzmvZ+0/lzTeItyOSqvigSh+F81k8Jt9eqr
+wqb/xBb9ONT8kr0+QTv2h66OHqKL5f91upCV8lZTMu07DyUZ85G/qCngeojICFy
QAczRNz/LENyhpeWPOI0SwTkLSURYv4GT85AQv63LpX9kQlmpt/+U78CgYEAwX+m
diN09CDtToR2gJCHPawru68sigVRd1M8oXznlIWL85Qpzavhj0ZD2LFd0+3MvPKZ
Q/mZnPioMov1u614+mHnYM5H3OL9PBbe5s2iflffahCV2oXU0y6swDU4jrI0oZ61
LQx5w1ULAqJJMP6Uba5GDmNz8Bf2BmbRzYeIkDkCgYEA1IW/y7qooT4bb1hsRrjG
tW1uNoMn65AEOnDOUS9/vD8IMZIds25SmHS7zlKWjbpXIe56oByhh5jbVCnBjRIh
B6RUdc557kgTk2g3AkPHJ7POJyPqnWSBkC55mZBrjU/5kMnZPJPTFEPuxiegsBkm
thT9OVh+EilUxPyaX/GJyZUCgYAyg7WcP9NnbDUne1NIavKzegAMxkV1XsAOy68X
ZXk7f8WyeCqVo9qFwc0yg9M/4WPCq/6xDTc6EHwwffNP5JChpO93iUKfeq6rgjj8
vhA+tYgAs4W7f5a47wVwRDSYpBMzYjBgK1KaWNg//sfmv39WRtnJJdN9iXPT5gG9
izVumQKBgH5qOIxd4Y5NV42k5ipV0v1vEHl+Xo9PUAHQoy1GZn+DF0QMfzgUhVyj
g3+iRAJJDek0qasqniG8k3UNqJGei/0K0CMFEM/gqQcHeQgrTNre5TsksWJzYlQd
bBBpXSx7kyjpejndt+ico3R5MctNgiX4OqqWl9CGCe5+/I+lc1qN
-----END RSA PRIVATE KEY-----
`;

try {
  console.log("My rsa private key is", modulus.RSAPrivateKey(rsakey));
  console.log("My cert public key is", modulus.X509PublicKey(cert));
} catch (e) {
  console.error ("test failed");
  throw e;
}
