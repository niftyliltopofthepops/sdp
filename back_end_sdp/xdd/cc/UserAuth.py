from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework import views, permissions, status
from rest_framework.permissions import IsAuthenticated
from cc.serializers import ObtainTokenSerializer
#from wesitex_app.serializers import UserSerializer
from cc.EmailBackEnd import JWTAuthentication
from cc.EmailBackEnd import EmailBackEnd



User = get_user_model()

class app_auth(views.APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = ObtainTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        username_or_email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        user = User.objects.filter(username=username_or_email).first()
        if user is None:
            user = User.objects.filter(email=username_or_email).first()

        if user is None or not user.check_password(password):
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate the JWT token
        jwt_token = JWTAuthentication.create_jwt(user)


        return Response({'token': jwt_token, 'username':user.username, 'user_type': user.user_type})