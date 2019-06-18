from app import db, auth
from .model import User
from flask import g
from marshmallow import ValidationError
from flask import request
from .schema import JokeSchema,UserSchema
from marshmallow import Schema


@auth.verify_password
def verify_password(username_or_token, password):
    print("verification happened")
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first_or_404(description="user not found")
        print(user)
        verified = user.verify_password(password)
        if not verified:
            return False
    g.user = user
    return True


"""this doesn't work"""
# def load_json(json_input):

    

#     if not json_input:
#         return {'error': 'need json for request'}, 400
    
#     user_schema=UserSchema()
#     print('user_schema',type(user_schema))

#     print('dataaaa',0)
#     try:
#         data = user_schema.load(json_input)
#     except ValidationError as err:
#          return {'errors': err.messages}, 422

#     # print('dataaa:',data)

#     return data

